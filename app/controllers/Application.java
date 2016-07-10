package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import controllers.domain.model.MessageRequest;
import controllers.domain.model.MessageSender;
import controllers.infrastructure.BloggerService;
import controllers.infrastructure.VirginGivingWebService;
import org.apache.commons.mail.EmailException;
import play.libs.F;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

import javax.inject.Inject;
import java.io.File;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

public class Application extends Controller {

    @Inject
    MessageSender messageSender;

    @Inject
    BloggerService bloggerService;

    @Inject
    static VirginGivingWebService fundraisingService;

    public Result index() {
        return ok(index.render());
    }

    public F.Promise<Result> getFundraisingSummary() {
        return fundraisingService.retrieveFundraisingSummary().map(Results::ok);
    }

    public Result getSponsorshipPdf() {
        URL fileUrl = this.getClass().getResource("/public/files/eastern-ramblers.pdf");
        try {
            return ok(new File(fileUrl.toURI()));
        } catch (URISyntaxException e) {
            return internalServerError();
        }
    }

    public Result sendMessage() {
        JsonNode json = request().body().asJson();
        if (json == null)
            return badRequest("No data received");
        MessageRequest messageRequest = Json.fromJson(json, MessageRequest.class);
        if (messageRequest.invalid())
            return badRequest("Complete required fields");

        try {
            messageSender.sendMessageHome(Json.fromJson(json, MessageRequest.class));
        } catch (EmailException e) {
            return internalServerError(e.getMessage());
        }
        return ok("form received");
    }

    public F.Promise<Result> getBlogSummaries() {
        return bloggerService.retrieveBlogPosts().map(Results::ok);
    }

}

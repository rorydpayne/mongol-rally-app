package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import controllers.domain.model.MessageRequest;
import controllers.domain.model.MessageSender;
import controllers.infrastructure.VirginGivingWebService;
import org.apache.commons.mail.EmailException;
import play.libs.F;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

import javax.inject.Inject;

public class Application extends Controller {

    @Inject
    MessageSender messageSender;

    @Inject
    static VirginGivingWebService fundraisingService;

    public Result index() {
        return ok(index.render());
    }

    public F.Promise<Result> getFundraisingSummary() {
        return fundraisingService.retrieveFundraisingSummary().map(Results::ok);
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

}

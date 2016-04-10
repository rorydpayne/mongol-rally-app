package controllers;

import controllers.infrastructure.VirginGivingWebService;
import play.*;
import play.libs.F;
import play.mvc.*;

import views.html.*;

import javax.inject.Inject;

public class Application extends Controller {

    @Inject
    static VirginGivingWebService fundraisingService;

    public Result index() {
        return ok(index.render());
    }

    public F.Promise<Result> getFundraisingSummary() {
        return fundraisingService.retrieveFundraisingSummary().map(Results::ok);
    }

}

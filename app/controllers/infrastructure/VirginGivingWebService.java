package controllers.infrastructure;

import com.fasterxml.jackson.databind.JsonNode;
import controllers.domain.model.FundraisingSummary;
import play.libs.F;
import play.libs.ws.WSClient;
import play.libs.ws.WSRequest;
import play.libs.ws.WSResponse;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;


/**
 * Created by rorypayne on 03/04/2016.
 */
public class VirginGivingWebService {

    private static final String API_KEY = "";
    private static final String RESOURCE_ID = "";
    private static final String PAGE_ID = "";

    @Inject
    WSClient webServiceClient;

    public VirginGivingWebService() {
    }

    public F.Promise<JsonNode> retrieveFundraisingSummary() {
        String url = String.format("https://api.virginmoneygiving.com/fundraisers/v1/account/%s/pages/$s.json", RESOURCE_ID, PAGE_ID);
        WSRequest request = webServiceClient.url(url)
                .setQueryParameter("api_key", API_KEY)
                .setRequestTimeout(1000);
        return request.get().map(WSResponse::asJson);
    }
}

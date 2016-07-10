package controllers.infrastructure;


import com.fasterxml.jackson.databind.JsonNode;
import play.Play;
import play.libs.F;
import play.libs.ws.WSClient;
import play.libs.ws.WSRequest;
import play.libs.ws.WSResponse;

import javax.inject.Inject;

public class BloggerService {

    private static final String BLOG_ID = Play.application().configuration().getString("blogger.blogid");
    private static final String BLOGGER_API_KEY = Play.application().configuration().getString("blogger.apikey");

    @Inject
    WSClient webServiceClient;

    public F.Promise<JsonNode> retrieveBlogPosts() {
        String url = String.format("https://www.googleapis.com/blogger/v3/blogs/%s/posts", BLOG_ID);
        WSRequest request = webServiceClient.url(url)
                .setQueryParameter("key", BLOGGER_API_KEY)
                .setRequestTimeout(1000);
        return request.get().map(WSResponse::asJson);
    }
}

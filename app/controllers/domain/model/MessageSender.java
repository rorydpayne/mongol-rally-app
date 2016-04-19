package controllers.domain.model;


import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.SimpleEmail;
import play.libs.mailer.Email;
import play.libs.mailer.MailerClient;

import javax.inject.Inject;

public class MessageSender {

    @Inject
    MailerClient mailerClient;

    public MessageSender() {
    }

    private static final String RORY_EMAIL = "Rory Payne <rorydpayne@gmail.com>";
    private static final String JEM_EMAIL = "Jeremy Ireland <jeremy_ireland10@hotmail.co.uk>";
    private static final String PEDRO_EMAIL = "Peter McLoughlin <pete_mcloughlin@hotmail.co.uk>";
    private static final String KATLYN_EMAIL = "Katlyn Green <katlynmgreen91@gmail.com>";
    private static final String REUBEN_EMAIL = "Reuben Kettle Aiers <reubenkettle@gmail.com>";
    private static final String SUBJECT = "MONGOL RALLY";

    public void sendMessageHome(MessageRequest message) throws EmailException {
        Email email = new Email();
        email.setFrom(String.format("%s %s <%s>", message.getFirstName(), message.getLastName(), message.getEmail()));
        email.setSubject(SUBJECT);
        email.addTo(JEM_EMAIL);
        email.addTo(PEDRO_EMAIL);
        email.addTo(KATLYN_EMAIL);
        email.addTo(REUBEN_EMAIL);
        email.addTo(RORY_EMAIL);

        String body = String.format("First name: %s%n" +
                                    "Last name: %s%n" +
                                    "Telephone: %s%n" +
                                    "Email: %s%n" +
                                    "Company: %s%n%n" +
                                    "Message: %s", message.getFirstName(), message.getLastName(),
                message.getPhone() != null ? message.getPhone() : "-",
                message.getEmail(), message.getCompany() != null ? message.getCompany() : "-", message.getMessage());
        email.setBodyText(body);
        mailerClient.send(email);
    }
}

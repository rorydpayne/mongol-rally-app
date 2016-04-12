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
    private static final String SUBJECT = "MONGOL RALLY";

    public void sendMessageHome(MessageRequest message) throws EmailException {
        Email email = new Email();
        email.setFrom(String.format("%s %s <%s>", message.getFirstName(), message.getLastName(), message.getEmail()));
        email.setSubject(SUBJECT);
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

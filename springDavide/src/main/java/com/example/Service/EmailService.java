package com.example.Service;

/*import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.SimpleMailMessage;

@Service("emailService")
public class EmailService
{
    @Autowired
    private JavaMailSenderImpl mailSender;

    @Autowired
    private SimpleMailMessage preConfiguredMessage;

    
     // This method will send compose and send a new message
    public void sendNewMail(String to, String subject, String body)
    {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);
    }

    
    // This method will send a pre-configured message
     
    public void sendPreConfiguredMail(String message)
    {
        SimpleMailMessage mailMessage = new SimpleMailMessage(preConfiguredMessage);
        mailMessage.setText(message);
        mailSender.send(mailMessage);
    }
}*/

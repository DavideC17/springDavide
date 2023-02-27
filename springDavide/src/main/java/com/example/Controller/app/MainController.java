package com.example.Controller.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//import com.example.Service.MyUserDetailsService;

@Controller
public class MainController {

    @Autowired
    //private MyUserDetailsService myUserDetailsService;

    @RequestMapping("/")
    public String getHomeString() {
        return "index";
    }

    @RequestMapping("/user") 
    public String getUserString() {
        return "user";
    }

    /* 
    @RequestMapping("/login") 
    public String login(String email) { 
        if (myUserDetailsService.loadUserByUsername(email) == null) {
            return "user";
        } else {
            return "user";
        }
    }
    */
}

package com.example.Configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
   @Override
   protected void configure(HttpSecurity http) throws Exception {
      http.cors().disable().csrf().disable()
         .authorizeRequests()
            .antMatchers("/").permitAll()
            .and()
        .authorizeRequests()
            .antMatchers("/resources/**").permitAll()
            .and()
        .authorizeRequests()
            .antMatchers("/user").permitAll()//.authenticated()
            .and()
         .formLogin()
            .loginPage("/#iscriviti")
            .permitAll()
            .and()
            .logout()
            .permitAll();
   }

   /* 
   @Bean
   @Override
	public UserDetailsService userDetailsService() {
        List<com.example.Entity.User> users = UserService.readAll();
        UserDetails user = null;
        for (com.example.Entity.User u : users) {
            user =
			 User.withDefaultPasswordEncoder()
				.username(u.getEmail())
				.password(u.getPassword())
				.roles("USER")
				.build();
        }

		return new InMemoryUserDetailsManager(user);
	}
    */

    
}

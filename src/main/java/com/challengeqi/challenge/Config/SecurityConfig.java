package com.challengeqi.challenge.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.challengeqi.challenge.Filter.JwtAuthenticationFilter;
import com.challengeqi.challenge.Filter.SpaWebFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;
    @Autowired
    private AuthenticationProvider authProvider;
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
            .csrf(csrf ->
                csrf.disable()
            )
            .authorizeHttpRequests(authRequest ->
                authRequest
                    //.anyRequest().permitAll()
                    //.requestMatchers("/api/auth/**").permitAll()
                    .requestMatchers("/", "/index.html", "/static/**",
                    "/assets/*", "/*.ico", "/*.json", "/*.png", "/api/auth/**").permitAll()
                    .anyRequest().authenticated()
            )
            .sessionManagement(sessionManager ->
                sessionManager
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authenticationProvider(authProvider)
            //.addFilterBefore(corsFilter, ChannelProcessingFilter.class)
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
            .addFilterAfter(new SpaWebFilter(), BasicAuthenticationFilter.class)
            .build();
    }
}
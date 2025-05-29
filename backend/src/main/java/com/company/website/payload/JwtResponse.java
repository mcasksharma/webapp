package com.company.website.payload;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JwtResponse {
    private String accessToken;
    private String type = "Bearer";
    private String username;

    public JwtResponse(String accessToken) {
        this.accessToken = accessToken;
    }

    public JwtResponse(String accessToken, String username) {
        this.accessToken = accessToken;
        this.username = username;
    }
}
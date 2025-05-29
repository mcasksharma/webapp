package com.company.website.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:8000" })
@RestController
@RequestMapping("/api/company")
@Tag(name = "Company", description = "Company information API")
public class CompanyController {

        @Operation(summary = "Get company information", description = "Returns basic company information")
        @ApiResponses(value = {
                        @ApiResponse(responseCode = "200", description = "Successfully retrieved company information")
        })
        @GetMapping("/info")
        public Map<String, Object> getCompanyInfo() {
                return Map.of(
                                "name", "ABC Software Solutions",
                                "founded", 2010,
                                "headquarters", "New York, USA",
                                "employees", 250,
                                "description", "Leading provider of enterprise software solutions");
        }

        @Operation(summary = "Get company services", description = "Returns list of services offered by the company")
        @ApiResponses(value = {
                        @ApiResponse(responseCode = "200", description = "Successfully retrieved services list")
        })
        @GetMapping("/services")
        public List<Map<String, Object>> getServices() {
                return Arrays.asList(
                                Map.of(
                                                "id", 1,
                                                "name", "Custom Software Development",
                                                "description", "Tailored software solutions for your business needs"),
                                Map.of(
                                                "id", 2,
                                                "name", "Mobile App Development",
                                                "description", "Native and cross-platform mobile applications"),
                                Map.of(
                                                "id", 3,
                                                "name", "Cloud Solutions",
                                                "description", "Scalable and reliable cloud infrastructure"));
        }
}

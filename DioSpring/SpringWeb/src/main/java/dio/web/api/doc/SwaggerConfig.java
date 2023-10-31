package dio.web.api.doc;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Arrays;
import java.util.HashSet;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    public Contact contato(){
        return new Contact(
                "Rauner",
                "http://www.siteRauner.com.br",
                "rauner@Dev.com.br");
    }

    private ApiInfoBuilder infoApi(){
        ApiInfoBuilder apiInfoBuilder = new ApiInfoBuilder();

        apiInfoBuilder.title("Aprendendo Api Rest");
        apiInfoBuilder.description("Api feita do bootcamp da dio!");
        apiInfoBuilder.version("0.0.1");
        apiInfoBuilder.termsOfServiceUrl("Termos de uso: Open Souce");
        apiInfoBuilder.license("Licença - Rauner Imagineitor");
        apiInfoBuilder.licenseUrl("http://www.siteRauner.com.br");
        apiInfoBuilder.contact(this.contato());

        return apiInfoBuilder;
    }

    @Bean
    public Docket detalheApi() {
        Docket docket = new Docket(DocumentationType.SWAGGER_2);

        docket
                .select()
                .apis(RequestHandlerSelectors.basePackage("dio.web.api.controller"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(this.infoApi().build())
                .consumes(new HashSet<String>(Arrays.asList("application/json")))
                .produces(new HashSet<String>(Arrays.asList("application/json")));

        return docket;
    }









}

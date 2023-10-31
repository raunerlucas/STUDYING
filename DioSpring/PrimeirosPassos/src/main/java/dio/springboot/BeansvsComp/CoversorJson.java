package dio.springboot.BeansvsComp;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;


@Component
public class CoversorJson {
    @Autowired
    private Gson gson;

    public ViaCepResponse converter(String json){
        return gson.fromJson(json, ViaCepResponse.class);
    }


}

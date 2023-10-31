package subsistema2cep;

import one.DIO.gof.singleton.SingletonEager;

public class CepApi {

    private static CepApi instance = new CepApi() ;

    private CepApi() {
        super();
    }

    public static CepApi getInstance(){
        return instance;
    }

    public String recuperarCidade(String cep){
        return "Araraquara";
    }
    public String recuperarEstado(String cep){
        return "São Paulo";
    }

}

package subsistema1crm;

public class CrmService {
    private CrmService(){
        super();
    }

    public static void gravarCliente(String nome, String cep, String
                                     cidade, String estado){
        System.out.println("Nome: "+nome+", cep: "+cep
                            +", Cidade: "+cidade+", Estado: "+estado);
        System.out.println("Salvo em CRM");

    }
}

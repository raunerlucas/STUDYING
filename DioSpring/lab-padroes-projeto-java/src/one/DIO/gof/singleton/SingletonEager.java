package one.DIO.gof;

/**
 * Singleton "Apreçado"
 * @author Rauner
 */
public class SingletonEager {

    private static SingletonEager instance = new SingletonEager() ;

    private SingletonEager() {
        super();
    }

    public static SingletonEager getInstance(){
        return instance;
    }
}

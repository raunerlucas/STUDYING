package one.DIO.gof;

/**
 * Singleton "preguiçoso"
 * @author Rauner
 */
public class SingletonLazy {

    private static SingletonLazy instance;

    private SingletonLazy() {
        super();
    }

    public static SingletonLazy getInstance(){
        return (instance == null ? instance = new SingletonLazy() : instance);
    }
}

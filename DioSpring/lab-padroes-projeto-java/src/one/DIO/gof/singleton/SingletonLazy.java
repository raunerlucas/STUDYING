package one.DIO.gof.singleton;

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

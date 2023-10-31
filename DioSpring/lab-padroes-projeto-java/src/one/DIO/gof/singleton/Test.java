package one.DIO.gof.singleton;

public class Test {
    public static void main(String[] args) {
        SingletonLazy lazy = SingletonLazy.getInstance();
        System.out.println(lazy);
        lazy = SingletonLazy.getInstance();
        System.out.println(lazy);

        SingletonEager Eager = SingletonEager.getInstance();
        System.out.println("\n"+Eager);
        Eager = SingletonEager.getInstance();
        System.out.println(Eager);

        SingletonLazyHolder holder = SingletonLazyHolder.getInstance();
        System.out.println("\n"+holder);
        holder = SingletonLazyHolder.getInstance();
        System.out.println(holder);


    }
}

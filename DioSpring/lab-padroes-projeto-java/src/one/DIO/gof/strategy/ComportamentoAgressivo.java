package one.DIO.gof.strategy;

public class ComportamentoDefensivo implements Comportamento{
    @Override
    public void mover() {
        System.out.println("Monvendo-se Defensivamente");
    }
}

package one.DIO.gof.strategy;

public class ComportamentoAgressivo implements Comportamento{
    @Override
    public void mover() {
        System.out.println("Monvendo-se Agressivamente");
    }
}

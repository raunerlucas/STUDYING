package aulas;

import base.Aula;
import model.Estudante;

import java.util.List;

public class Aula4 extends Aula {

    public void AppProgramacaoFuncional() {
        double maiorNota = super.estudantes
                .stream()
                .filter(e -> e.getSexo() == 'M')
                .mapToDouble( e -> e.getNota())
                .max()
                .orElse(0);

        System.out.println(maiorNota);
    }
}

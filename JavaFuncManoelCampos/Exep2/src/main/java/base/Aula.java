package base;

import model.Estudante;
import model.StudentGenerator;

import java.util.List;
public abstract class Aula {
    protected static final int TOTAL_ESTUDANTES = 10;
    protected final List<Estudante> estudantes = StudentGenerator.generate(TOTAL_ESTUDANTES);

}

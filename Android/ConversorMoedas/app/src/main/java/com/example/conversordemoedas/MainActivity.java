package com.example.conversordemoedas;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private EditText numMoedas;
    private EditText cotMoeda;
    private TextView result;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        numMoedas = findViewById(R.id.numMoedas);
        cotMoeda = findViewById(R.id.cotMoeda);
        result =  findViewById(R.id.result);
    }

    public void converter(View view){
        double nm = Double.parseDouble(numMoedas.getText().toString());
        double cm = Double.parseDouble(cotMoeda.getText().toString());
        double rt = nm * cm;
        result.setText("RESULTADO -- R$"+rt);
    }
}
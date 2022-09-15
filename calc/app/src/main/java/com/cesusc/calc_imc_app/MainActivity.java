package com.cesusc.calc_imc_app;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private TextView result;
    private EditText weightEdit;
    private EditText heightEdit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        result = findViewById(R.id.result);
        weightEdit = findViewById(R.id.weightEdit);
        heightEdit = findViewById(R.id.heightEdit);
    }

    @SuppressLint("SetTextI18n")
    public void imcCalc(View view) {
        final double weight = Double.parseDouble(weightEdit.getText().toString());
        final Double height = Double.parseDouble(heightEdit.getText().toString());
        final double imcResult = weight / (height * height);

        if (imcResult < 19) {
            result.setText("Underweight");
        } else if (imcResult >= 19 && imcResult < 25) {
            result.setText("Normal Weight");
        } else if (imcResult >= 25 && imcResult < 30) {
            result.setText("Overweight");
        } else if (imcResult >= 30 && imcResult < 40) {
            result.setText("Overweight 1");
        } else {
            result.setText("Obesity");
        }
    }
}
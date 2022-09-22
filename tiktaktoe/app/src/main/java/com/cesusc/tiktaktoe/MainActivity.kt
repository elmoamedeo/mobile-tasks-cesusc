package com.cesusc.tiktaktoe

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    private val buttons = listOf(
            R.id.btn_1,
            R.id.btn_2,
            R.id.btn_3,
            R.id.btn_4,
            R.id.btn_5,
            R.id.btn_6,
            R.id.btn_7,
            R.id.btn_8,
            R.id.btn_9,
    )


    fun btnClick(view: View) {
        val selectedButton = view as Button;
        var cellId = 0;

        when (selectedButton.id) {
            R.id.btn_1 -> cellId = 1
            R.id.btn_2 -> cellId = 2
            R.id.btn_3 -> cellId = 3
            R.id.btn_4 -> cellId = 4
            R.id.btn_5 -> cellId = 5
            R.id.btn_6 -> cellId = 6
            R.id.btn_7 -> cellId = 7
            R.id.btn_8 -> cellId = 8
            R.id.btn_9 -> cellId = 9
        }

        doNextMove(cellId, selectedButton)
    }

    var playerOne = ArrayList<Int>();
    var playerTwo = ArrayList<Int>();

    var play = 1;

    private fun doNextMove(cellId: Int, selectedButton: Button) {
        if (play == 1) {
            selectedButton.text = "X"
            selectedButton.setBackgroundColor(Color.GREEN)
            playerOne.add(cellId)
            play = 2
        } else {
            selectedButton.text = "O";
            selectedButton.setBackgroundColor(Color.YELLOW)
            playerTwo.add(cellId);
            play = 1
        }

        selectedButton.isEnabled = false
        isWinner()
    }

    private fun isWinner() {
        var winner = -1

        if (playerOne.contains(1) && playerOne.contains(2) && playerOne.contains(3)) {
            winner = 1
        } else if (playerTwo.contains(1) && playerTwo.contains(2) && playerTwo.contains(3)) {
            winner = 2
        } else if (playerOne.contains(4) && playerOne.contains(5) && playerOne.contains(6)) {
            winner = 1
        } else if (playerTwo.contains(4) && playerTwo.contains(5) && playerTwo.contains(6)) {
            winner = 2
        } else if (playerOne.contains(7) && playerOne.contains(8) && playerOne.contains(9)) {
            winner = 1
        } else if (playerTwo.contains(7) && playerTwo.contains(8) && playerTwo.contains(9)) {
            winner = 2
        } else if (playerOne.contains(1) && playerOne.contains(5) && playerOne.contains(9)) {
            winner = 1
        } else if (playerTwo.contains(1) && playerTwo.contains(5) && playerTwo.contains(9)) {
            winner = 2
        } else if (playerOne.contains(3) && playerOne.contains(5) && playerOne.contains(7)) {
            winner = 1
        } else if (playerTwo.contains(3) && playerTwo.contains(5) && playerTwo.contains(7)) {
            winner = 2
        } else if (playerOne.contains(1) && playerOne.contains(4) && playerOne.contains(7)) {
            winner = 1
        } else if (playerTwo.contains(1) && playerTwo.contains(4) && playerTwo.contains(7)) {
            winner = 2
        } else if (playerOne.contains(2) && playerOne.contains(5) && playerOne.contains(8)) {
            winner = 1
        } else if (playerTwo.contains(2) && playerTwo.contains(5) && playerTwo.contains(8)) {
            winner = 2
        } else if (playerOne.contains(3) && playerOne.contains(6) && playerOne.contains(9)) {
            winner = 1
        } else if (playerTwo.contains(3) && playerTwo.contains(6) && playerTwo.contains(9)) {
            winner = 2
        }

        if (winner != -1) {
            if (winner == 1) {
                Toast.makeText(this, "Player 1 won the game", Toast.LENGTH_SHORT).show()
            } else {
                Toast.makeText(this, "Player 2 won the game", Toast.LENGTH_SHORT).show()
            }
        }
    }

    fun cleanFields(view: View) {
        playerOne.clear();
        playerTwo.clear();

        for (fieldButton in buttons) {
            val obterBotao = findViewById<Button>(fieldButton)
            obterBotao.text = ""
            obterBotao.isEnabled = true
            obterBotao.setBackgroundColor(Color.BLUE)
        }
    }

}
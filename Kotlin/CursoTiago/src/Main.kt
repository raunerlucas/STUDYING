import java.lang.Thread.sleep

fun main() {
  HelloForever()
}

fun HelloForever(): Nothing{
    while (true){
        Thread.sleep(2000)
        println("Testando o Nothing Oie")
    }
}
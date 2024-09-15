// Temperature Converter
fun convertTemp(temp: Double, currUnit: Char, targetUnit: Char): Double {
    if (currUnit.uppercaseChar() == 'C') {
        return if (targetUnit.uppercaseChar() == 'F')
            (((9.0 / 5.0) * temp) + 32)
        else if (targetUnit.uppercaseChar() == 'K')
            temp + 273.15
        else
            temp

    } else if (currUnit.uppercaseChar() == 'F') {
        return if (targetUnit.uppercaseChar() == 'C')
            (5.0 / 9.0) * (temp - 32)
        else if (targetUnit.uppercaseChar() == 'K')
            ((5.0 / 9.0) * (temp - 32) + 273.15)
        else
            temp
    } else {
        return if (targetUnit.uppercaseChar() == 'F')
            ((9.0 / 5.0) * (temp - 273.15) + 32)
        else if (targetUnit.uppercaseChar() == 'C')
            temp - 273.15
        else
            temp
    }
}

fun main() {
    println("******* Temperature converter *******")
    print("Enter Current Temperature: ")
    val temp = readln().toDouble()
    // print('\n')

    print("Enter Current Unit ((C)elsius / (F)arenheit / (K)elvin: ")
    val currUnit = readln()
    // print('\n')

    print("Enter Target Unit ((C)elsius / (F)arenheit / (K)elvin: ")
    val targetUnit = readln()
    // print('\n')

    val ans = convertTemp(temp, currUnit[0], targetUnit[0])
    println("The Converted Temperature is = $ans ${targetUnit[0].uppercaseChar()}")
}
<?php
// Arquivo: contador.php
$arquivo = 'contador.txt';

// Verifica se o arquivo existe
if (file_exists($arquivo)) {
    // Lê o valor atual
    $contador = (int) file_get_contents($arquivo);
} else {
    $contador = 0;
}

// Incrementa o contador quando há um click
if (isset($_GET['click'])) {
    $contador++;
    file_put_contents($arquivo, $contador);
}

// Exibe o contador
echo "Total de acessos: " . $contador;
?>

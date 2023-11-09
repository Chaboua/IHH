<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $subject = isset($_POST['subject']) ? $_POST['subject'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    // Valider les champs (vous pouvez ajouter d'autres validations selon vos besoins)
    if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
        // Un champ est vide, vous pouvez gérer cela comme vous le souhaitez
        echo 'Veuillez remplir tous les champs du formulaire.';
    } else {
        // Tous les champs sont remplis, procédez au traitement
        // Envoi de l'e-mail, etc.
        $to = 'doriane.ake2998@gmail.com';
        $headers = "From: $email" . "\r\n" .
                    "Reply-To: $email" . "\r\n" .
                    "X-Mailer: PHP/" . phpversion();

        mail($to, $subject, $message, $headers);

        // Redirection après l'envoi du formulaire
        header('Location: index.html');
        exit;
    }
}
?>

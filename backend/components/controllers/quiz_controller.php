<?php

$uc2 = isset($_GET['uc2']) ? htmlspecialchars($_GET['uc2']) : null;

if ($uc2 === null) {
    echo json_encode(Quiz::getAll());
} else {
    $quiz = new Quiz($uc2);
    if ($quiz->mainInfo === null) {
        quitWithCodeAndJson(404, ['error' => 'No such quiz']);
    }
    $quizData = $quiz->mainInfo;
    $quizData->questions = [];
    foreach ($quiz->questions as $question) {
        $questionData = $question->mainInfo;
        $questionData->answers = $question->answers;
        $quizData->questions[] = $questionData;
    }
    echo json_encode($quizData);
}

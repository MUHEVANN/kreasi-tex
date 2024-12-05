<?php

namespace App\Http\Controllers;

abstract class Controller
{
    public function res($message, $status, $data = null)
    {
        $response = [
            'message' => $message,
            'status' => $status,
            'data' => $data
        ];
        return response()->json($response, $status);
    }
}

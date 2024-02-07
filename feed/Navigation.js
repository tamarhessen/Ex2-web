import FeedScreen from "./FeedScreen";
import {BrowserRouter, Route, Routes, Navigate, useNavigate} from
        "react-router-dom";
import React, {useState} from "react";


function BackToMenu({navigate}) {

    console.log("hello");
    navigate("/");
}

function SendToUserPage() {
    return (
        <></> // should change the path to user page.

    );
}

export {BackToMenu, SendToUserPage};
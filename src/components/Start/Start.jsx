import React from 'react';
import './Start.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

export default function Start() {
  const router = useHistory();

  const handleStart = () => {
    if (localStorage.getItem('userAnswers')) {
      localStorage.removeItem('userAnswers');
    }
    router.push("questions/1")
  }

  return (
    <div className="Start-button">
      <Button
        onClick={handleStart}
        size="lg"
        variant="dark">
          Start
      </Button>
    </div>
  )
}

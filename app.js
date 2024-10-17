document.getElementById('search-form').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const prompt = document.getElementById('prompt').value;
    const apiKey = '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'; // Voeg hier je eigen OpenAI API-sleutel toe
  
    try {
      // Stuur de vraag naar de OpenAI API
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: prompt,
          max_tokens: 100,
        }),
      });
  
      const data = await response.json();
      const answer = data.choices[0].text.trim();
  
      // Toon het antwoord op de pagina
      document.getElementById('answer').innerText = `Antwoord: ${answer}`;
    } catch (error) {
      console.error('Er ging iets mis bij het ophalen van het antwoord:', error);
      document.getElementById('answer').innerText = 'Er ging iets mis. Probeer het later opnieuw.';
    }
  });
  

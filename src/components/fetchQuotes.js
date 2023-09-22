import { useState, useEffect } from 'react';

export default function Quote() {
  const [quote, setquote] = useState();
  const [author, setauthor] = useState();
  const [IsLoading, setIsLoading] = useState(false);
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      setIsLoading(true);
      const category = 'computers';
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': 'tyAW0sF1+Km62zWfKI87ww==EQRLmvaxitC4vrLf',
            },
          });
        const jsoned = await response.json();

        setquote(jsoned[0].quote);
        setauthor(jsoned[0].author);
      } catch (error) {
        sethasError(true);
      }
      setIsLoading(false);
    };
    fetchQuotes();
  }, [setquote]);

  if (IsLoading) return <div>quote is loading..</div>;

  if (hasError) return <span>Error, could not fetch quotes</span>;

  return (
    <>
      <br />
      <div className="quote">
        Todays quote:
        {quote}
        --
        {author}
        <br />
      </div>
    </>
  );
}

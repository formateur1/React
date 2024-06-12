
import { useState, useEffect } from 'react';
const Fetch = () => {
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    async function getReg() {
    await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCrypto(data);
      });
    }

    getReg();
  }, []);
  return (
    <div>
      <h1>Les cryptomonnaies</h1>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <table>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Market Cap</td>
                        <td>Price</td>
                        <td>Available Supply</td>
                        <td>Volume(24hrs)</td>
                    </tr>
                </thead>
                {/* Mapping all the cryptos */}
                <tbody>
                    {/* Filtering to check for the searched crypto */}
                    {crypto
                        .filter((val) => {
                            return val.name.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((val, id) => {
                            return (
                                <>
                                    <tr id={id}>
                                        <td className="rank">{val.market_cap_rank}</td>
                                        <td className="logo">
                                                <img src={val.image} alt="logo" width="30px" />
 
                                            <p>{val.name}</p>
 
                                        </td>
                                        <td className="symbol">{val.symbol}</td>
                                        <td>${val.market_cap}</td>
                                        <td>${val.current_price.toFixed(2)}</td>
                                        <td>{val.availableSupply}</td>
                                        <td>{val.total_volume.toFixed(0)}</td>
                                    </tr>
                                </>
                            );
                        })}
                </tbody>
            </table>
    </div>
  );
};
export default Fetch;
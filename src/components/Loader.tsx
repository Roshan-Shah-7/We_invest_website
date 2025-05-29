// components/Loader.tsx
import { useEffect, useState } from 'react';

const Loader = () => {
    const [candles, setCandles] = useState<Array<{ open: number, high: number, low: number, close: number }>>([]);
    const [loadingProgress, setLoadingProgress] = useState(0);

    // Initialize candles with random data
    useEffect(() => {
        const initialCandles = Array.from({ length: 12 }, () => {
            const base = 50 + Math.random() * 30;
            return {
                open: base,
                high: base + 5 + Math.random() * 10,
                low: base - 5 - Math.random() * 10,
                close: base + (Math.random() - 0.5) * 10
            };
        });
        setCandles(initialCandles);
    }, []);

    // Animate the candles
    useEffect(() => {
        const interval = setInterval(() => {
            setCandles(prev => {
                const newCandles = [...prev];

                // Remove the oldest candle
                newCandles.shift();

                // Create new candle
                const lastClose = prev[prev.length - 1].close;
                const newOpen = lastClose;
                const change = (Math.random() - 0.3) * 8; // Bias toward positive
                const newClose = newOpen + change;

                newCandles.push({
                    open: newOpen,
                    high: Math.max(newOpen, newClose) + Math.random() * 4,
                    low: Math.min(newOpen, newClose) - Math.random() * 4,
                    close: newClose
                });

                return newCandles;
            });

            // Update loading progress
            setLoadingProgress(prev => Math.min(prev + 1, 100));
        }, 300);

        return () => clearInterval(interval);
    }, []);

    // Normalize prices to fit within chart height
    const normalizePrice = (price: number) => {
        if (candles.length === 0) return 0;

        const allPrices = candles.flatMap(c => [c.high, c.low]);
        const minPrice = Math.min(...allPrices);
        const maxPrice = Math.max(...allPrices);
        const range = maxPrice - minPrice || 1; // Avoid division by zero

        // Return inverted Y coordinate (higher price = higher position)
        return 100 - ((price - minPrice) / range * 90);
    };

    return (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
            {/* Trading chart container */}
            <div className="relative w-full max-w-2xl h-64 mb-8 px-4">
                {/* Chart grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pb-6">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-end">
                            <div className="border-t border-gray-200 w-full"></div>
                            <div className="text-xs text-gray-400 ml-2 -mb-4">
                                {candles.length > 0
                                    ? Math.round(
                                        Math.min(...candles.flatMap(c => [c.low])) +
                                        (Math.max(...candles.flatMap(c => [c.high])) -
                                            Math.min(...candles.flatMap(c => [c.low]))
                                        ) * i / 4
                                    )
                                    : ''}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Animated candlesticks */}
                {candles.length > 0 && (
                    <div className="absolute inset-0 flex items-end justify-between px-4">
                        {candles.map((candle, index) => {
                            const isUp = candle.close > candle.open;
                            const color = isUp ? '#4CAF50' : '#F44336'; // Green for up, red for down

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center relative"
                                    style={{ width: `${100 / candles.length}%` }}
                                >
                                    {/* Wick */}
                                    <div
                                        className="w-0.5 absolute"
                                        style={{
                                            height: `${normalizePrice(candle.low) - normalizePrice(candle.high)}%`,
                                            bottom: `${normalizePrice(candle.high)}%`,
                                            backgroundColor: color
                                        }}
                                    ></div>

                                    {/* Candle body */}
                                    <div
                                        className="absolute rounded-sm w-3/5"
                                        style={{
                                            height: `${Math.abs(normalizePrice(candle.close) - normalizePrice(candle.open))}%`,
                                            bottom: `${Math.min(normalizePrice(candle.open), normalizePrice(candle.close))}%`,
                                            backgroundColor: color
                                        }}
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Loading progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                    <div
                        className="h-full transition-all duration-500"
                        style={{
                            width: `${loadingProgress}%`,
                            backgroundColor: '#00695C'
                        }}
                    ></div>
                </div>
            </div>

            {/* Company name */}
            <div className="text-2xl font-bold mt-6 tracking-wide" style={{ color: '#00695C' }}>
                Wee Invest Global Pvt. Ltd.
            </div>

            {/* Loading text with animated dots */}
            <div className="mt-4 text-gray-600 text-lg flex">
                <span>assets are loading</span>
                <span className="ml-1 loading-dots"></span>
                <span className="ml-2 font-medium" style={{ color: '#00695C' }}>
                    {loadingProgress}%
                </span>
            </div>

            {/* Animated dots styling */}
            <style jsx>{`
        .loading-dots::after {
          content: '.';
          animation: dots 1.5s infinite;
        }
        
        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60%, 100% { content: '...'; }
        }
      `}</style>
        </div>
    );
};

export default Loader;

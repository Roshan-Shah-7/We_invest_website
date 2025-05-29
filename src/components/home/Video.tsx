// components/VideoGallery.tsx
import { useState } from 'react';

interface Video {
    id: string;
    title: string;
    description?: string;
}

interface VideoGalleryProps {
    videos: Video[];
}

const VideoGallery = ({ videos }: VideoGalleryProps) => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const toggleVideo = (id: string) => {
        setActiveVideo(activeVideo === id ? null : id);
    };

    return (
        <div className="mx-auto py-12 px-4 bg-[#F5F7FA] w-full">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4" style={{ color: '#00695C' }}>
                    Video Collection
                </h1>
                <div className="w-20 h-1 mx-auto bg-[#00695C] rounded-full"></div>
            </div>

            <div className="max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                    >
                        <div className="relative cursor-pointer" onClick={() => toggleVideo(video.id)}>
                            {/* Video thumbnail or player */}
                            {activeVideo === video.id ? (
                                <div className="aspect-video">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </div>
                            ) : (
                                <>
                                    <div className="aspect-video bg-gray-200 relative">
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-[#00695C] flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 ml-1 text-white"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-xl font-bold text-white truncate">{video.title}</h3>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Video info */}
                        <div className="p-5">
                            <div className="flex items-center justify-between mb-3">
                                <button
                                    onClick={() => toggleVideo(video.id)}
                                    className="px-4 py-2 rounded-full font-medium flex items-center"
                                    style={{ backgroundColor: '#00695C', color: 'white' }}
                                >
                                    {activeVideo === video.id ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            Close
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                            Play
                                        </>
                                    )}
                                </button>
                                <div className="text-xs px-2 py-1 rounded-full bg-gray-100">
                                    5:24
                                </div>
                            </div>

                            {video.description && (
                                <p className="text-gray-600 mt-2 line-clamp-2">
                                    {video.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;
export const publicPath = (path: string): string => {
    if (!path) return "";
    
    // Remove leading slash from path, and trailing slash from baseUrl
    const cleanPath = path.replace(/^\//, '');
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || '').replace(/\/$/, '');
    
    return `${baseUrl}/${cleanPath}`;
};

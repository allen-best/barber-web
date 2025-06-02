export default function AuthCallback() {
    // Handle the code from Instagram here
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    return <div>Authorization Code: {code}</div>;
}
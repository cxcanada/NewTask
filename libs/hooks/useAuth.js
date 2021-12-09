import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'libs/firebase'

function useAuth() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        // components mounts
        const authChange = onAuthStateChanged(auth, (clientCredential) => {
                if (clientCredential) {
                    setUser(clientCredential)
                } else {
                    setUser(null)
                }
            })
            // components unmount
        return () => authChange()
    }, [])
    return user
}

export { useAuth }
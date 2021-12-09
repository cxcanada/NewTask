import { useEffect, useState } from 'react'
// get single doc in firestore
// import { doc, getDoc } from 'firebase/firestore'
// get multiple docs in firestore
import { collection, getDocs } from 'firebase/firestore'
import { db } from 'libs/firebase'

function useUserProfile(path) {
    // read a single Doc from a collection
    const [userProfile, setUserProfile] = useState(null);

    // const [output, setOutPut] = useState("is working")

    useEffect(() => {
        async function getFirebaseDoc() {
            // get single doc from firestore
            // const docRef = await doc(db, path)
            // const docData = await getDoc(docRef)
            //     // docData.data()
            // setUserProfile(docData.data())

            // get multiple docs from firestore
            const ref = collection(db, 'users')
            const userSnapshot = await getDocs(ref)
            let users = []
            userSnapshot.forEach(doc => {
                users.push(doc.data())
            })
        }
        getFirebaseDoc()
    }, [])

    return userProfile
}

export { useUserProfile }
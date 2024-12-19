import {Tabs} from 'expo-router';

export default function TabLayout(){

    return(
        <Tabs>
            <Tabs.Screen 
                name = "Index"
                options = {{
                    title: 'Home'
                }}
            
            />
            <Tabs.Screen
                name = "Search"
            />
        </Tabs>
    )

}
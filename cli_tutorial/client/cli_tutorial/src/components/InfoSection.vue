<template>
    <div>
        <h1>{{infoprop.title}}</h1>
        <ul>
            <p v-for="topic in infoprop.topics">{{topic}}</p>
        </ul>
    </div>
</template>

<script>
export default {
    name: "InfoSection",
    props: [
        "infoprop"
    ]
}
</script>
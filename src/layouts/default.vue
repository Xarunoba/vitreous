<template>
    <div class="w-full">
        <header>
            <Header />
        </header>
        <main>
            <RouterView v-slot="{ Component, route }">
                <transition name="fade" mode="out-in">
                    <div :key="route.name">
                        <component :is="Component" />
                    </div>
                </transition>
            </RouterView>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        react(),
    ],
    // server: {
    //     host: '0.0.0.0', // Écoute sur toutes les interfaces réseau
    //     port: 3000,      // Port pour le serveur de développement
    //     hmr: {
    //       host: '192.168.1.7', // Remplacez par l'adresse IP de votre machine
    //       port: 3000
    //     }
    // },
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});

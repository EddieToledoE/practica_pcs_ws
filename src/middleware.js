export { default } from 'next-auth/middleware'

export const config = {
    matcher: ['/inicio', '/inventario', '/ajustes', '/citas', '/estadisticas', '/envios', '/expedientes', '/ventas']
}
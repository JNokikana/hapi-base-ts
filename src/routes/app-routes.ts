exports.plugin = {
    name: "app-routes",
    version: "1.0.0",
    register: async function (server: any, options: any) {
        server.route(
            {
                method: "GET",
                path: "/api/test",
                config: {
                    handler: (request: any, reply: any) => {
                        return reply("Works.");
                    }
                }
            }
        )
    }
}
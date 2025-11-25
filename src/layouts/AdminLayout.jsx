import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "../pages/Tela18_AdminDashboard.module.css"; // Reusing styles from AdminDashboard for now

const AdminLayout = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.adminContainer}>
            {/* --- ADMIN SIDEBAR (Centralized) --- */}
            <aside className={styles.sidebar}>
                <h2 className={styles.logo}>LÚMINA ADMIN</h2>

                <nav className={styles.nav}>
                    {/* Active state logic can be improved with NavLink later, using simple buttons for now as per original code */}
                    <button className={styles.navItem} onClick={() => navigate("/admin")}>
                        Dashboard
                    </button>
                    <button
                        className={styles.navItem}
                        onClick={() => navigate("/admin/users")}
                    >
                        Usuários
                    </button>
                    <button className={styles.navItem} onClick={() => navigate("/admin/tracks")}>
                        Trilhas
                    </button>
                    <button className={styles.navItem} onClick={() => navigate("/admin/content")}>
                        Conteúdo
                    </button>
                    <button className={styles.navItem} onClick={() => navigate("/admin/moderation")}>
                        Moderação
                    </button>
                    <button className={styles.navItem} onClick={() => navigate("/admin/reports")}>
                        Relatórios
                    </button>
                    <button className={styles.navItem} onClick={() => navigate("/admin/brand")}>
                        Brand Equity
                    </button>
                    <button className={styles.navItem} onClick={() => navigate("/admin/export")}>
                        Exportar
                    </button>
                </nav>
            </aside>

            {/* --- ADMIN CONTENT AREA --- */}
            <main className={styles.contentArea}>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;

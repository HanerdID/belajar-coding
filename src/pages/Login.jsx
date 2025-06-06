// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography, Card, Checkbox, Divider } from "antd";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import Logo from "../components/atoms/Logo";

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login values:", values);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen section-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-charcoal hover:text-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Home</span>
        </Link>

        <Card className="shadow-elegant-hover">
          <div className="text-center mb-8">
            <Logo size="large" variant="dark" />
            <Title
              level={3}
              style={{ color: "#07020D", marginTop: 16, marginBottom: 8 }}
            >
              Selamat Datang Kembali
            </Title>
            <Text style={{ color: "#716A5C" }}>
              Masuk untuk melanjutkan pembelajaran coding Anda
            </Text>
          </div>

          <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            size="large"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Email wajib diisi!" },
                { type: "email", message: "Format email tidak valid!" },
              ]}
            >
              <Input
                prefix={<Mail className="w-4 h-4 text-sage" />}
                placeholder="Masukkan email Anda"
                style={{ borderRadius: 12 }}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Password wajib diisi!" }]}
            >
              <Input.Password
                prefix={<Lock className="w-4 h-4 text-sage" />}
                placeholder="Masukkan password Anda"
                style={{ borderRadius: 12 }}
              />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-between items-center">
                <Checkbox>Ingat saya</Checkbox>
                <Link
                  to="/forgot-password"
                  className="text-sage hover:text-charcoal"
                >
                  Lupa password?
                </Link>
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                style={{
                  background: "linear-gradient(135deg, #07020D, #716A5C)",
                  border: "none",
                  borderRadius: 12,
                  height: 48,
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                Masuk
              </Button>
            </Form.Item>
          </Form>

          <Divider>atau</Divider>

          <div className="text-center">
            <Text style={{ color: "#716A5C" }}>
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="text-dark font-medium hover:text-sage"
              >
                Daftar sekarang
              </Link>
            </Text>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;

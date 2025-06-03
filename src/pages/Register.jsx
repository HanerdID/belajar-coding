// src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography, Card, Checkbox, Divider } from "antd";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import Logo from "../components/atoms/Logo";

const { Title, Text } = Typography;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Register values:", values);
      navigate("/dashboard");
    } catch (error) {
      console.error("Register error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen section-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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
              Mulai Perjalanan Coding Anda
            </Title>
            <Text style={{ color: "#716A5C" }}>
              Daftar gratis dan akses semua materi pembelajaran
            </Text>
          </div>

          <Form
            name="register"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            size="large"
          >
            <Form.Item
              label="Nama Lengkap"
              name="fullName"
              rules={[{ required: true, message: "Nama lengkap wajib diisi!" }]}
            >
              <Input
                prefix={<User className="w-4 h-4 text-sage" />}
                placeholder="Masukkan nama lengkap Anda"
                style={{ borderRadius: 12 }}
              />
            </Form.Item>

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
              rules={[
                { required: true, message: "Password wajib diisi!" },
                { min: 6, message: "Password minimal 6 karakter!" },
              ]}
            >
              <Input.Password
                prefix={<Lock className="w-4 h-4 text-sage" />}
                placeholder="Buat password yang kuat"
                style={{ borderRadius: 12 }}
              />
            </Form.Item>

            <Form.Item
              label="Konfirmasi Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Konfirmasi password wajib diisi!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Password tidak cocok!"));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<Lock className="w-4 h-4 text-sage" />}
                placeholder="Ulangi password Anda"
                style={{ borderRadius: 12 }}
              />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(
                            "Anda harus menyetujui syarat dan ketentuan"
                          )
                        ),
                },
              ]}
            >
              <Checkbox>
                Saya setuju dengan{" "}
                <Link to="/terms" className="text-sage hover:text-charcoal">
                  Syarat dan Ketentuan
                </Link>{" "}
                serta{" "}
                <Link to="/privacy" className="text-sage hover:text-charcoal">
                  Kebijakan Privasi
                </Link>
              </Checkbox>
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
                Daftar Sekarang
              </Button>
            </Form.Item>
          </Form>

          <Divider>atau</Divider>

          <div className="text-center">
            <Text style={{ color: "#716A5C" }}>
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="text-dark font-medium hover:text-sage"
              >
                Masuk di sini
              </Link>
            </Text>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;

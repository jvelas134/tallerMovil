-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-05-2023 a las 21:52:02
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `calendar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agendamientos`
--

CREATE TABLE `agendamientos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(120) NOT NULL,
  `desc` varchar(250) NOT NULL,
  `fecha_ini` datetime NOT NULL,
  `fecha_fin` datetime NOT NULL,
  `usuarioId` int(11) NOT NULL,
  `tipoAgendamientoId` int(11) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `agendamientos`
--

INSERT INTO `agendamientos` (`id`, `titulo`, `desc`, `fecha_ini`, `fecha_fin`, `usuarioId`, `tipoAgendamientoId`, `estado`) VALUES
(1, 'Salida de campo', 'salida 1', '2022-12-06 23:34:15', '2022-12-06 23:34:15', 1, 1, 1),
(2, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(3, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(4, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(5, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(6, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(7, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(8, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(9, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(10, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(11, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(12, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(13, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1),
(14, 'actividad 1', 'descripcion', '2022-12-07 04:34:15', '2022-12-07 04:34:15', 6, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `apellido` varchar(120) NOT NULL,
  `edad` varchar(3) NOT NULL,
  `telefono` varchar(12) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `nombre`, `apellido`, `edad`, `telefono`, `estado`) VALUES
(1, 'Jorge', 'Velasquez', '22', '39392942', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_agendamientos`
--

CREATE TABLE `tipo_agendamientos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_agendamientos`
--

INSERT INTO `tipo_agendamientos` (`id`, `nombre`, `estado`) VALUES
(1, 'Trabajo', 1),
(2, 'Personal', 1),
(3, 'Familiar', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `correo` varchar(120) NOT NULL,
  `contraseña` varchar(120) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `correo`, `contraseña`, `estado`) VALUES
(1, 'string', 'string', 1),
(5, 'string', 'string', 0),
(6, 'string', 'string', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agendamientos`
--
ALTER TABLE `agendamientos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_agendamientos`
--
ALTER TABLE `tipo_agendamientos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agendamientos`
--
ALTER TABLE `agendamientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipo_agendamientos`
--
ALTER TABLE `tipo_agendamientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
